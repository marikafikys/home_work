export interface ConfirmDialogOptions {
    title?: string;
    message?: string;
}

export interface ConfirmDialogProps extends ConfirmDialogOptions {
    onConfirm: () => void;
    onCancel: () => void;
}
