import { useCallback, useState } from "react";

export function useToggle(initial = false) {
    const [value, setValue] = useState(initial);

    const toggle = useCallback(() => {
        setValue((v) => (!v));
    }, [setValue]);

    return [value, toggle];
}