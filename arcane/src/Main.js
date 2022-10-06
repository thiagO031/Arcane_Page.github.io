import React from "react";

// sass
import "./style/Main.sass";

// react-icons
import { MdOutlineNotificationsNone } from "react-icons/md"

const Main = () => {
  return (
    <main className="main-container">
        <div className="main-content">
            <h1>
              <span>arcane</span>
            </h1>
            <h1>parte 2</h1>
            
            <div className="main-buttons">
                <span>
                    <button>
                        <i><MdOutlineNotificationsNone/></i>
                        avise-me
                      </button>
                </span>
                <button>adicionar na lista</button>
            </div>
        </div>
    </main>
  )
}

export default Main