import React, { useEffect, useState } from "react";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { generarColor } from "./color";

const url = "https://api.quotable.io/random?maxLength=60";

function Quotes({ color, onChangeColor }) {
  const [text, setText] = useState("");
  const [author, setAuthor] = useState("");
  const [isvisible, setIsVisible] = useState(true);

  useEffect(() => {
    getQuote();
  }, []);

  async function getQuote() {
    let isIgnore = false;
    try {
      const response = await axios.request({
        method: "GET",
        url,
      });
      const data = await response.data;
      console.log(data.content);
      if (!isIgnore) {
        setText(data.content);
        setAuthor(data.author);
      }
      return () => {
        isIgnore = true;
      };
    } catch (err) {
      console.log(err);
    }
  }

  function fadeIn() {
    setIsVisible(false);
    setTimeout(() => {
      setIsVisible(true);
    }, 600);
  }

  return (
    <>
      <section id="quote-box">
        <blockquote className={isvisible ? "visible" : "hidden"}>
          <p id="text" style={{ color: color }}>
            <FontAwesomeIcon icon={faQuoteLeft} /> {text}
          </p>
          <cite id="author" style={{ color: color }}>
            {author}
          </cite>
        </blockquote>

        <div className="footer-quote">
          <div className="social-media">
            <a
              id="tweet-quote"
              href="twitter.com/intent/tweet"
              target="_blank"
              style={{ backgroundColor: color }}
            >
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a
              href="facebook.com"
              target="_blank"
              style={{ backgroundColor: color }}
            >
              {" "}
              <FontAwesomeIcon icon={faFacebook} />
            </a>
          </div>
          <button
            id="new-quote"
            style={{ backgroundColor: color }}
            onClick={() => {
              fadeIn();
              setTimeout(() => {
                onChangeColor(generarColor());
                getQuote();
              }, 600);
            }}
          >
            Nueva Cita
          </button>
        </div>
      </section>
      <span className="dev">by Saile</span>
    </>
  );
}

export default Quotes;
