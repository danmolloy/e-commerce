import Layout from "../components/layout";
import { BsChevronDown } from 'react-icons/bs'
import { useState } from "react";

const qAndA = [
  {
    "key": 1,
    "question": "How can I tell when my coffee was roasted?",
    "answer": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dignissim porta nunc, vitae dapibus eros vulputate id. Duis vehicula suscipit neque, at aliquet enim fringilla non. Donec rutrum finibus libero, ac imperdiet tortor."
  },
  {
    "key": 2,
    "question": "Where are the beans sourced?",
    "answer": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dignissim porta nunc, vitae dapibus eros vulputate id. Duis vehicula suscipit neque, at aliquet enim fringilla non. Donec rutrum finibus libero, ac imperdiet tortor."
  },
  {
    "key": 3,
    "question": "How much is delivery?",
    "answer": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras dignissim porta nunc, vitae dapibus eros vulputate id. Duis vehicula suscipit neque, at aliquet enim fringilla non. Donec rutrum finibus libero, ac imperdiet tortor."
  }
]

export default function Faq() {
  const [showAnswer, setShowAnswer] = useState(null)

  const handleClick = (key) => {
    showAnswer === key 
    ? setShowAnswer(null) 
    : setShowAnswer(key)
  }

  return (
    <Layout>
      <h1>Frequently Asked Questions</h1>
      <div className="faq-list">
        {qAndA.map(i => (
          <div key={i.key} className="faq-item">
            <div className="faq-question">
              <p>
                {i.question}
              </p>
              <button onClick={() => handleClick(i.key)} >
                <BsChevronDown className="h-8 w-8 rounded-full p-2 hover:bg-gray-200" />
              </button>
            </div>
            {showAnswer === i.key && <p className="faq-answer">{i.answer}</p>}
          </div>
        ))}
      </div>
    </Layout>
  )
}