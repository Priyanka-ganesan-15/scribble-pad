import { useContext, useState, useEffect } from "react";
import { UserContext } from "../context/userContext.js";
// firebase
import { query, where, orderBy, onSnapshot } from "firebase/firestore";
import { notesRef } from "../firebase-config.js";

export default function useNotesData() {
  const { user } = useContext(UserContext);
  const [notes, setNotes] = useState([]);

  const q = query(
    notesRef,
    where("author", "==", user.uid),
    orderBy("createdAt", "desc")
  );

  useEffect(() => {
    const unsubscribe = onSnapshot(q, (snapshot) => {
      setNotes(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });

    return unsubscribe;
  }, [q]);

  const allNotes = notes;

  const deleted = allNotes.filter((note) => note.deleted === true);

  const archived = allNotes.filter(
    (note) => note.archived === true && note.deleted === false
  );

  const labeledNotes = allNotes.filter((note) => note.label.length !== 0);

  const pinned = allNotes.filter(
    (note) =>
      note.deleted === false && note.archived === false && note.pinned === true
  );

  const unpinned = allNotes.filter(
    (note) =>
      note.deleted === false && note.archived === false && note.pinned === false
  );

  return {
    allNotes,
    deleted,
    archived,
    labeledNotes,
    pinned,
    unpinned,
  };
}
