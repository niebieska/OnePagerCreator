import type { Education } from "src/models/cv";

export type ModalCommand = {
    type: 'create-entry' | 'update-entry';
    index: number;
    entry: Education;
}

export type ResultDismiss = {
    type: 'dismiss';
}

export type ResultCreate = {
    type: 'create';
    education: Education;
}

export type ResultUpdate = {
    type: 'update';
    index: number;
    education: Education;
}

export type ResultDelete = {
    type: 'delete';
    index: number;
}
