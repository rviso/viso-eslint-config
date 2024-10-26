

import { computed, watch, ref } from 'vue'
import {
  // 核心
  VXETable,
  // 功能模块
  Icon,
  Filter,
  // Menu,
  Edit,
  // Export,
  Keyboard,
  // Validator,
  Header,
  Footer,

  // 可选组件
  Column,
  Colgroup,
  // Grid,
  // Toolbar,
  // Pager,
  // Checkbox,
  // CheckboxGroup,
  // Radio,
  // RadioGroup,
  // RadioButton,
  // Input,
  // Textarea,
  // Button,
  Modal,
  Tooltip,
  // Form,
  // FormItem,
  // FormGather,
  // Select,
  // Optgroup,
  // Option,
  // Switch,
  List,
  // Pulldown,

  // 表格
  Table
} from 'vxe-table'
import { asyncRoutes } from './index'


const _a = 0


function test(_a, b) {
  console.log(b)
}


const modules = import.meta.glob('./modules/**/*.js', { eager: true })


