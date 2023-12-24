import React, { createContext, useState, useEffect } from "react";
import { User } from "firebase/auth/cordova";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../config/Firebase";
import { doc, getDoc } from "firebase/firestore";

type GameProviderProps = {
  children: React.ReactNode;
};

export type BackpackItems = {
  name: string;
  quantity: number;
  cap: number;
  icon: string;
};

type CharData = {
  id: string;
  email: string;
  nickName: string;
  level: number;
  xp: number;
  xpToLvlUp: number;
  backpack: BackpackItems[] | null;
};

type GameContextProps = {
  char: User | null;
  setChar: React.Dispatch<React.SetStateAction<User | null>>;
  currentChar: CharData | null;
  setCurrentChar: React.Dispatch<React.SetStateAction<CharData | null>>;
};

export const GameContext = createContext<GameContextProps | null>(null);

export default function GameProvider({ children }: GameProviderProps) {
  const [char, setChar] = useState<User | null>(null);
  const [currentChar, setCurrentChar] = useState<CharData | null>(null);
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (char) => {
      if (char) {
        setChar(char);
        const charRef = await getDoc(doc(db, "users", char.uid));

        if (charRef) {
          setCurrentChar(charRef.data() as CharData);
        }
        setIsFetching(false);
        return;
      }
      setChar(null);
      setIsFetching(false);
    });

    return () => unsub();
  }, []);

  if (isFetching)
    return (
      <div className="w-full h-screen bg-primary text-link flex justify-center items-center">
        loading...
      </div>
    );

  return (
    <GameContext.Provider
      value={{ char, setChar, currentChar, setCurrentChar }}
    >
      {children}
    </GameContext.Provider>
  );
}
