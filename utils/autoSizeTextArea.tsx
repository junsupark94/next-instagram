import { RefObject, useEffect, useMemo, useRef, useState } from "react";

type Props = {
  minHeight?: number;
  maxHeight?: number;
};

export default function useAutoSizeTextArea(
  textAreaRef: RefObject<HTMLTextAreaElement>,
  props?: Props
) {
  const heights = useMemo(() => {
    let foo = {
      minHeight: 18,
      maxHeight: 80,
    };
    if (!props) return foo;
    else {
      if (props.maxHeight !== undefined) foo.maxHeight = props.maxHeight;
      if (props.minHeight !== undefined) foo.minHeight = props.minHeight;
    }
    return foo;
  }, [props]);
  const { minHeight, maxHeight } = heights;

  useEffect(() => {
    if (!textAreaRef.current) return;
    textAreaRef.current.style.height = `${minHeight}px`;
    const scrollHeight = Math.min(textAreaRef.current.scrollHeight, maxHeight);
    textAreaRef.current.style.height = scrollHeight + "px";
  }, [textAreaRef, textAreaRef.current?.value, minHeight, maxHeight]);
}
