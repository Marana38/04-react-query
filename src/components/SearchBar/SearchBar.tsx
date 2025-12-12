// import type { FormEvent } from "react";
import toast from "react-hot-toast";
import css from "./SearchBar.module.css";

interface SearchBarProps {
  onSubmit: (query: string) => void;
}

export default function SearchBar({ onSubmit }: SearchBarProps) {
  return (
    <header className={css.header}>
      <div className={css.container}>
        <a
          className={css.link}
          href="https://www.themoviedb.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by TMDB
        </a>

        <form
          action={(formData: FormData) => {
            const value = formData.get("query") as string;
            if (!value.trim()) {
              toast.error("Query shouldn't be empty");
              return;
            }
            onSubmit(value);
          }}
        >
          <input
            className={css.input}
            name="query"
            type="text"
            placeholder="Search movies..."
            autoFocus
          />
          <button className={css.button}>Search</button>
        </form>
      </div>
    </header>
  );
}
