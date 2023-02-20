import { defineComponent, Teleport, Transition } from 'vue'
import { drawerProps, DrawerProps } from './types'
import DrawerOverlay from './components/drawer-overlay'
import { useDrawer } from './use-drawer'
import '../../scss/components/drawer/_drawer.module.scss'

export default defineComponent({
  name: 'h-drawer',
  inheritAttrs: false,
  props: drawerProps,
  emits: ['close', 'update:modelValue', 'open'],
  setup(props: DrawerProps, { emit, slots, attrs }) {
    const { overlayRef, drawerRef, drawerClasses, handleOverlayClick } =
      useDrawer(props, emit)
    return () => (
      <Teleport to="body">
        {props.showOverlay && (
          <DrawerOverlay
            ref={overlayRef}
            visible={props.modelValue}
            style={{ zIndex: props.zIndex - 1 }}
            onClick={handleOverlayClick}
          />
        )}
        <Transition name={`drawer-fly-${props.position}`}>
          {props.modelValue && (
            <div
              ref={drawerRef}
              class={drawerClasses.value}
              style={{ zIndex: props.zIndex }}
              {...attrs}
            >
              {slots.default?.()}
            </div>
          )}
        </Transition>
      </Teleport>
    )
  }
})
