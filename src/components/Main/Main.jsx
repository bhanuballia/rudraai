import React, { useContext, useState } from 'react'
import './Main.css'
import { assets } from '../../assets/assets'
import { Context } from '../../context/Context'

const Main = () => {

  const { onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    setInput,
    input
  } = useContext(Context);


  return (
    <div className='main'>
      <div className="nav">
        <p>Rudra AI</p>
        <img src={assets.user_logo1} alt="" />
      </div>
      <div className="main-container">
        {showResult
          ? <div className="result">
            <div className='result-title'>
              <img src={assets.user_logo1} alt="" />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <img src={assets.Rudra_logo} alt="" />
              {loading
                ? <div className="loader">
                  <hr className="animated-bg" />
                  <hr className="animated-bg" />
                  <hr className="animated-bg" />
                </div>
                : <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
              }
            </div>

          </div>
          : <>
            <div className="greet">
              <p><span>Namaste,Friend.</span></p>
              <p>Welcome  to  Rudra AI</p>
              <p>How can I help you today?</p>
            </div>
            <div className="cards">
              <div className="card">
                <p>Tell me famous resturents in Delhi both in vegeterian and Non- Vegeterian</p>
                <img src={assets.compass_icon} alt="" />
              </div>
              <div className="card">
                <p>Explain me the concept Linked List in programing</p>
                <img src={assets.bulb_icon} alt="" />
              </div>
              <div className="card">
                <p>Suggest me website for resume  building</p>
                <img src={assets.message_icon} alt="" />
              </div>
              <div className="card">
                <p>Improve the readability of the following code</p>
                <img src={assets.code_icon} alt="" />
              </div>
            </div>
          </>
        }



        <div className="main-bottom">
          <div className="search-box">
            <input onChange={(e) => setInput(e.target.value)} value={input} type="text" color="#0000FF"   placeholder='Ask me anything' />
            <div>
              <img src={assets.gallery_icon} width={30} alt="" />
              <img src={assets.mic_icon} width={30} alt="" />
              {input ? <img onClick={() => onSent()} src={assets.send_icon} width={30} alt="" /> : null}
            </div>
          </div>
          <p className="bottom-info">
            Rudra AI  may display inaccurate info, including about people, so double-check its responses.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Main
