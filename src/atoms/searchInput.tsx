import React from "react";

import Input, { InputProps } from "./input";
import { useDebounce } from "@/hooks/useDebounce";

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface SearchInputProps extends InputProps {
  onDebounceChange?: (value: string) => void;
}

const SearchInput: React.FC<SearchInputProps> = ({
  containerClassName,
  onChange,
  onDebounceChange,
  ...props
}) => {
  const [value, setValue] = React.useState("");
  const searchTerm = useDebounce(value);

  const handleInputChange = React.useCallback(
    (val: string) => {
      setValue(val);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [value]
  );

  React.useEffect(() => {
    onDebounceChange?.(searchTerm);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchTerm]);

  return (
    <div>
      <Input
        placeholder="Search task"
        containerClassName={`shrink-0 ${containerClassName}`}
        {...props}
        onChange={(e) => {
          onChange?.(e);
          handleInputChange(e.target.value);
        }}
      />
    </div>
  );
};

export default SearchInput;
