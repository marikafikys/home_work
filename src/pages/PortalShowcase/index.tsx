import { Typography } from "@mui/material";
import { type FC, useCallback, useState } from "react";
import { Button } from "shared/button/ui/Button";
import { useConfirmDialog } from "shared/ui/ConfirmDialog/useConfirmDialog";
import { Tooltip } from "shared/ui/Tooltip/Tooltip";

export const PortalShowcasePage: FC = () => {
    const [isShowText, setIsShowText] = useState<boolean>(false);

    const handleClick = useCallback(() => {
        setIsShowText(!isShowText);
    }, [isShowText]);

    const { confirm, element } = useConfirmDialog();

    const handleDelete = async () => {
        const result = await confirm({
            title: "Удалить элемент?",
            message:
                "Вы уверены, что хотите удалить этот элемент? Действие нельзя отменить.",
        });

        if (result) {
            console.log("Элемент удалён");
        } else {
            console.log("Отменено");
        }
    };

    return (
        <>
            <Tooltip content="Tooltip" position="top">
                <Button onClick={handleClick}>Кнопка</Button>
            </Tooltip>
            <Typography>Наведите на кнопку для отображения tooltip</Typography>
            {isShowText && (
                <Typography>
                    Нажмите на кнопку выше, чтобы убрать данный текст
                </Typography>
            )}
            <Button onClick={handleDelete}>Удалить</Button>
            {element}
        </>
    );
};
