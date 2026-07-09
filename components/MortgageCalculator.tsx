"use client"

import { useMemo, useState } from 'react'

export default function MortgageCalculator() {
  const [price, setPrice] = useState(500000)
  const [downPayment, setDownPayment] = useState(100000)
  const [rate, setRate] = useState(6.5)
  const [term, setTerm] = useState(30)

  const loanAmount = useMemo(() => price - downPayment, [price, downPayment])
  const monthlyRate = useMemo(() => (rate / 100) / 12, [rate])
  const monthlyPayment = useMemo(() => {
    if (!monthlyRate || loanAmount <= 0) return 0
    const payments = term * 12
    return (loanAmount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -payments))
  }, [loanAmount, monthlyRate, term])

  return (
    <section className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
      <div className="grid gap-8 rounded-[2rem] border border-slate-200 bg-slate-50 p-8 lg:grid-cols-[0.95fr_1.05fr] lg:p-10">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-600">Mortgage Calculator</p>
          <h2 className="mt-2 text-3xl font-semibold text-slate-900">Estimate your monthly payment</h2>
          <p className="mt-4 text-slate-600">
            Explore financing options and see how your budget aligns with your next property.
          </p>
        </div>

        <div className="rounded-[1.5rem] bg-white p-6 shadow-sm">
          <div className="grid gap-4 md:grid-cols-2">
            <label className="block text-sm font-medium text-slate-700">
              Home Price
              <input type="number" value={price} onChange={(e) => setPrice(Number(e.target.value))} className="mt-2 w-full rounded-xl border border-slate-200 px-3 py-2" />
            </label>
            <label className="block text-sm font-medium text-slate-700">
              Down Payment
              <input type="number" value={downPayment} onChange={(e) => setDownPayment(Number(e.target.value))} className="mt-2 w-full rounded-xl border border-slate-200 px-3 py-2" />
            </label>
            <label className="block text-sm font-medium text-slate-700">
              Interest Rate (%)
              <input type="number" step="0.1" value={rate} onChange={(e) => setRate(Number(e.target.value))} className="mt-2 w-full rounded-xl border border-slate-200 px-3 py-2" />
            </label>
            <label className="block text-sm font-medium text-slate-700">
              Loan Term (years)
              <input type="number" value={term} onChange={(e) => setTerm(Number(e.target.value))} className="mt-2 w-full rounded-xl border border-slate-200 px-3 py-2" />
            </label>
          </div>

          <div className="mt-6 rounded-2xl bg-slate-900 p-5 text-white">
            <p className="text-sm text-slate-300">Estimated Monthly Payment</p>
            <p className="mt-2 text-3xl font-semibold">${monthlyPayment.toFixed(0)}</p>
            <div className="mt-4 flex items-center justify-between text-sm text-slate-300">
              <span>Loan Amount</span>
              <span>${loanAmount.toLocaleString()}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
