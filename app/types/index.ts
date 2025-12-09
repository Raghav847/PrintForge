import type { ReactNode, HTMLAttributes } from "react"

// Data Types
export type Model = {
  id: number
  name: string
  description: string
  likes: number
  image: string
  category: string
  dateAdded: string
}

// Page Types
export type RootLayoutProps = Readonly<{
  children: React.ReactNode;
}>

export type ModelDetailPageProps = {
    params: Promise<{
        id: string
    }>
}

// Components Types
export type ModelCardProps = {
    model: Model
}

export type PillProps = HTMLAttributes<HTMLSpanElement> & {
    children: ReactNode
    className?: string
}