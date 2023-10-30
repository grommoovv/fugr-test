type ModsType = Record<string, boolean | string | undefined>
type AddsType = Array<string | undefined>

const cn = (cls: string, mods: ModsType = {}, adds: AddsType = []): string => {
  return [
    cls,
    ...adds.filter(Boolean),
    ...Object.entries(mods)
      .filter(([_, value]) => Boolean(value))
      .map(([className]) => className),
  ].join(' ')
}

export type { AddsType, ModsType }
export { cn }
