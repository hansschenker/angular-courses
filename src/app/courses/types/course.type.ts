export interface Course {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
    category: string;
}

export const emptyCourse: Course = {
    id: 0,
    title: "new Title",
    description: "new Description",
    imageUrl: "../../../../assets/images/ruebli-beet.png",
    category: "new Category",

}