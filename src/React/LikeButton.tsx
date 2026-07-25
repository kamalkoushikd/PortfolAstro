import { useState, useEffect } from "react";
import { doc, onSnapshot, updateDoc, increment } from "firebase/firestore";
import { db } from "../firebase";

const LikeButton = () => {
  const [likes, setLikes] = useState<number | null>(null);
  const [isLiked, setIsLiked] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    setIsLiked(localStorage.getItem("websiteIsLiked") === "true");

    const likeDocRef = doc(db, "likes", "counter");
    const unsubscribe = onSnapshot(
      likeDocRef,
      (snapshot) => {
        if (snapshot.exists()) {
          setLikes(Math.max(0, snapshot.data().likes));
        }
      },
      (error) => console.error("Likes listener failed:", error)
    );

    return () => unsubscribe();
  }, []);

  const handleLike = async () => {
    if (isProcessing || isLiked) return;

    try {
      setIsProcessing(true);
      await updateDoc(doc(db, "likes", "counter"), { likes: increment(1) });
      setIsLiked(true);
      localStorage.setItem("websiteIsLiked", "true");
    } catch (error) {
      console.error("Error updating likes:", error);
    } finally {
      setIsProcessing(false);
    }
  };

  // Nothing to show until Firestore answers.
  if (likes === null) return null;

  return (
    <button
      onClick={handleLike}
      disabled={isProcessing || isLiked}
      aria-pressed={isLiked}
      className="like-button"
    >
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M16.5 3C19.5376 3 22 5.5 22 9C22 16 14.5 20 12 21.5C9.5 20 2 16 2 9C2 5.5 4.5 3 7.5 3C9.35997 3 11 4 12 5C13 4 14.64 3 16.5 3ZM12.9339 18.6038C13.8155 18.0485 14.61 17.4955 15.3549 16.9029C18.3337 14.533 20 11.9435 20 9C20 6.64076 18.463 5 16.5 5C15.4241 5 14.2593 5.56911 13.4142 6.41421L12 7.82843L10.5858 6.41421C9.74068 5.56911 8.5759 5 7.5 5C5.55906 5 4 6.6565 4 9C4 11.9435 5.66627 14.533 8.64514 16.9029C9.39 17.4955 10.1845 18.0485 11.0661 18.6038C11.3646 18.7919 11.6611 18.9729 12 19.1752C12.3389 18.9729 12.6354 18.7919 12.9339 18.6038Z" />
      </svg>
      <span>
        {likes} {likes === 1 ? "like" : "likes"}
      </span>

      <style>{`
        .like-button {
          display: inline-flex;
          align-items: center;
          gap: 0.55rem;
          height: 2.25rem;
          padding-inline: 1rem;
          border-radius: 999px;
          border: 1px solid var(--line-strong);
          background: transparent;
          color: ${isLiked ? "var(--accent)" : "var(--muted)"};
          font-family: "JetBrains Mono", ui-monospace, monospace;
          font-size: 0.7rem;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          cursor: ${isLiked ? "default" : "pointer"};
          transition: color .3s ease, border-color .3s ease, transform .3s ease;
        }
        .like-button:hover:not(:disabled) {
          color: var(--fg);
          border-color: var(--fg);
          transform: translateY(-1px);
        }
        .like-button svg {
          width: 0.95rem;
          height: 0.95rem;
          transition: transform .3s ease;
        }
        .like-button:hover:not(:disabled) svg { transform: scale(1.12); }
      `}</style>
    </button>
  );
};

export default LikeButton;
