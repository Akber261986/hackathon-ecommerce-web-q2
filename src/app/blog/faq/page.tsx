'use client'

import React, { useState } from "react";

const FAQPage = () => {
  
  const [question, setQuestion] = useState("")
  const [answer, setAnswer] = useState("")
  const [loading, setLoading] = useState(false)
  const [name, setName] = useState("")

  const handleSubmit = async () => {
    if (!question.trim()) return
    setLoading(true)
    setAnswer("")

    try {
      const res = await fetch("https://uvicorn-main-production-faa0.up.railway.app/ask", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ question }),
      })

      if (!res.ok) throw new Error("Request failed")

      const data = await res.json()
      setAnswer(data.answer)
    } catch (error) {
      console.error("Error:", error)
      setAnswer("Something went wrong.")
    } finally {
      setLoading(false)
    }
  }
  return (
    <div className="font-sans text-[#1D3178]">
      <div className="text-[#101750] font-sans bg-[#F6F5FF] py-16 px-4 sm:px-8">
        <h1 className="text-4xl font-bold">FAQ</h1>
        <p className="flex gap-2">
          <span>Home</span>
          <span>. Page</span>
          <span className="text-[#FB2E86]">. Faq</span>
        </p>
      </div>
      <div className="p-8 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column: General Information */}
          <div>
            <h2 className="text-2xl font-bold  mb-6">General Information</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold ">
                  Eu dictumst cum at sed euismod condimentum?
                </h3>
                <p className="text-[#A1ABCC]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Tristique sed tristique mollis vitae, consequat gravida
                  sagittis.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold ">
                  Magna bibendum est fermentum eros.
                </h3>
                <p className="text-[#A1ABCC]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Tristique sed tristique mollis vitae, consequat gravida
                  sagittis.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold ">
                  Odio muskana hok eris consequat scelerot?
                </h3>
                <p className="text-[#A1ABCC]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Tristique sed tristique mollis vitae, consequat gravida
                  sagittis.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold ">
                  Elit id blandit sabara boi velit gua mara?
                </h3>
                <p className="text-[#A1ABCC]">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Tristique sed tristique mollis vitae, consequat gravida
                  sagittis.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Ask a Question Form */}
          <div className="p-6 shadow-lg bg-[#F8F8FD]">
            <h2 className="text-2xl font-bold  mb-6">Ask a Question</h2>
            <form className="space-y-4 ">
              <input
                type="text"
                placeholder="Your Name*"
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-[#A1ABCC]"
                value={name}
                onChange={(e)=> setName(e.target.value)}
              />
              <input
                type="text"
                placeholder="Type Your question..."
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-[#A1ABCC]"
                value={question}
                onChange={(e) => setQuestion(e.target.value)}
              />
              { answer && (

                  <div
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 placeholder:text-[#A1ABCC]"
                >
                  <strong>Hello, Mr: {name}</strong>
                  <p>{answer}</p>
                </div>
              )}
              <button 
              className=" bg-[#FB2E86] text-white py-2 px-6 rounded-md text-lg font-medium hover:bg-[#f14d94] transition duration-200"
              onClick={handleSubmit}
              disabled={loading}
              >
              {loading ? "Thinking..." : "Ask"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQPage;
