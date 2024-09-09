import React from "react"
import { social } from "../data/dummydata"

export const Footer = () => {
  return (
    <>
      <footer>
        {social.map((item) => (
          <>
            <i data-aos='zoom-in'>{item.icon}</i>
          </>
        ))}
        <p data-aos='zoom-in'>All Right Resceved 2018</p>
      </footer>
    </>
  )
}


