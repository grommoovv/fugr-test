import { Book } from "../model/types/Book"

export interface ApiResponse {
	kind: string
	totalItems: number
	items: Book[]
}