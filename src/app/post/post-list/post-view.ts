import { User } from "src/app/user/user";

export interface PostView {
    user: User;
    id: number;
    title: string;
    body: string;
}