import type { ComponentType } from "svelte"

export default interface Social {
  name: string
  href: string
  icon: ComponentType
}
