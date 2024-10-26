
import { computed, defineComponent, mergeProps, onDeactivated, ref } from 'vue'
import type { JSX } from 'vue/jsx-runtime'

import { Tooltip } from '../tooltip'
import { ellipsisProps } from './props'

function createLineClampClass(clsPrefix: string): string {
  return `${clsPrefix}-ellipsis-line-clamp`
}

function createCursorClass(clsPrefix: string, cursor: string): string {
  return `${clsPrefix}-ellipsis-cursor-${cursor}`
}

export default defineComponent({
  name: 'GlEllipsis',
  inheritAttrs: false,
  props: {
    ...ellipsisProps()
  },
  setup(props, { slots, attrs }) {
    const prefixCls = 'gl'
    const triggerRef = ref<HTMLElement | null>(null)
    const triggerInnerRef = ref<HTMLElement | null>(null)
    const tooltipRef = ref(null)
    const expandedRef = ref(false)
    const ellipsisStyleRef = computed(() => {
      const { lineClamp } = props
      const { value: expanded } = expandedRef
      if (lineClamp !== undefined) {
        return {
          textOverflow: '',
          '-webkit-line-clamp': expanded ? '' : lineClamp
        }
      } else {
        return {
          textOverflow: expanded ? '' : 'ellipsis',
          '-webkit-line-clamp': ''
        }
      }
    })
    // const classString = computed(() => {
    //   const { lineClamp, expandTrigger } = props
    //   const prefixCls = `${prefixCls}-ellipsis`
    //   return {
    //     [prefixCls]: true,
    //     [`${prefixCls}-line`]: Number(lineClamp),
    //     // [`${prefixCls}-dashed`]: !!dashed,
    //   }
    // })
    function getTooltipDisabled(): boolean {
      let tooltipDisabled = false
      const { value: expanded } = expandedRef
      if (expanded) return true
      const { value: trigger } = triggerRef
      if (trigger) {
        const { lineClamp } = props
        // we need to apply style here, since the dom may be updated in
        // nextTick, measure dom size will derive wrong result
        syncEllipsisStyle(trigger)
        if (lineClamp !== undefined) {
          tooltipDisabled = trigger.scrollHeight <= trigger.offsetHeight
        } else {
          const { value: triggerInner } = triggerInnerRef
          if (triggerInner) {
            tooltipDisabled =
              triggerInner.getBoundingClientRect().width <=
              trigger.getBoundingClientRect().width
          }
        }
        syncCursorStyle(trigger, tooltipDisabled)
      }
      return tooltipDisabled
    }
    const handleClickRef = computed(() => {
      const handleExpandTrigger = (): void => {
        const { value: expanded } = expandedRef
        if (expanded) {
          tooltipRef.value?.setShow(false)
        }
        expandedRef.value = !expanded
      }

      return props.expandTrigger === 'click' ? handleExpandTrigger : undefined
    })
    onDeactivated(() => {
      if (props.tooltip) {
        tooltipRef.value?.setShow(false)
      }
    })
    const renderTrigger = (): JSX.Element => (
      <span
        {...mergeProps(attrs, {
          class: [
            `${prefixCls}-ellipsis`,
            props.lineClamp !== undefined
              ? createLineClampClass(prefixCls)
              : undefined,
            props.expandTrigger === 'click'
              ? createCursorClass(prefixCls, 'pointer')
              : undefined
          ],
          style: ellipsisStyleRef.value
        })}
        ref="triggerRef"
        onClick={handleClickRef.value}
        onMouseenter={
          // get tooltip disabled will derive cursor style
          props.expandTrigger === 'click' ? getTooltipDisabled : undefined
        }
      >
        {props.lineClamp ? (
          <>
            {slots?.trigger?.()} {slots?.default()}
          </>
        ) : (
          <span ref="triggerInnerRef">
            {slots?.trigger?.()}
            {slots?.default?.()}
          </span>
        )}
      </span>
    )
    function syncEllipsisStyle(trigger: HTMLElement): void {
      if (!trigger) return
      const latestStyle = ellipsisStyleRef.value
      const lineClampClass = createLineClampClass(prefixCls)
      if (props.lineClamp !== undefined) {
        syncTriggerClass(trigger, lineClampClass, 'add')
      } else {
        syncTriggerClass(trigger, lineClampClass, 'remove')
      }
      for (const key in latestStyle) {
        // guard can make it a little faster
        if ((trigger.style as any)[key] !== (latestStyle as any)[key]) {
          (trigger.style as any)[key] = (latestStyle as any)[key]
        }
      }
    }
    function syncCursorStyle(
      trigger: HTMLElement,
      tooltipDisabled: boolean
    ): void {
      const cursorClass = createCursorClass(prefixCls, 'pointer')
      if (props.expandTrigger === 'click' && !tooltipDisabled) {
        syncTriggerClass(trigger, cursorClass, 'add')
      } else {
        syncTriggerClass(trigger, cursorClass, 'remove')
      }
    }
    function syncTriggerClass(
      trigger: HTMLElement,
      styleClass: string,
      action: 'add' | 'remove'
    ): void {
      if (action === 'add') {
        if (!trigger.classList.contains(styleClass)) {
          trigger.classList.add(styleClass)
        }
      } else {
        if (trigger.classList.contains(styleClass)) {
          trigger.classList.remove(styleClass)
        }
      }
    }
    return () => {
      if (props.tooltip) {
        return (
          <Tooltip
            placement="top"
            ref="tooltipRef"
            title={slots?.tooltip?.() ?? slots.default?.()}
          >
            {renderTrigger()}
          </Tooltip>
        )
      } else return renderTrigger()
    }
  }
})
