import { useEffect, useRef, useState } from "react";

type Props = {
  minHeight?: number;
  maxHeight?: number;
};

export default function useAutoSizeTextArea(props?: Props) {
  if (props === undefined) props = {};
  props.minHeight = props.minHeight || 18;
  props.maxHeight = props.maxHeight || 80;
  const { minHeight, maxHeight } = props;

  const textAreaRef = useRef<HTMLTextAreaElement>(null);
  useEffect(() => {
    if (textAreaRef.current) {
      textAreaRef.current.style.height = `${minHeight}px`;
      const scrollHeight = Math.min(
        textAreaRef.current.scrollHeight,
        maxHeight
      );
      textAreaRef.current.style.height = scrollHeight + "px";
    }
  }, [textAreaRef, minHeight, maxHeight]);

  return textAreaRef;
}
