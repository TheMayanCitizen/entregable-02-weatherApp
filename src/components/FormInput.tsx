import { useRef } from "react";

type Params = {
  setCityInput: React.Dispatch<React.SetStateAction<string>>;
};

export const FormInput = ({ setCityInput }: Params) => {
  const inputSearch = useRef<HTMLInputElement>(null);

  const handlSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const inputValues = inputSearch.current?.value;

    if (inputValues) {
      setCityInput(inputValues);
    }
  };

  return (
    <form onSubmit={handlSubmit} className="form">
      <input
        type="text"
        placeholder="enter a city"
        ref={inputSearch}
        name="input"
        className="form__input"
      />
    </form>
  );
};
