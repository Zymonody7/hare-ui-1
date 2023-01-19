import { ExtractPropTypes, PropType } from 'vue'
export type Layout = 'horizontal' | 'vertical'
export type LabelSize = 'sm' | 'md' | 'lg'
export type LabelAlign = 'start' | 'center' | 'end'
export const formProps = {
  model: {
    type: Object,
    require: true
  },
  layout: {
    type: String as PropType<Layout>,
    default: 'horizontal'
  },
  labelSize: {
    type: String as PropType<LabelSize>,
    default: 'md'
  },
  labelAlign: {
    type: String as PropType<LabelAlign>,
    default: 'start'
  }
} as const
export type LabelData = {
  layout: Layout
  labelSize: LabelSize
  labelAlign: LabelAlign
}
export type FormProps = ExtractPropTypes<typeof formProps>
