'use client'
import React, { useState } from 'react'
import { Input } from './ui/Input'
import { Button } from './ui/Button'
import axios from 'axios'
import { Badge } from './ui/Badge'
import { ReloadIcon, CrossCircledIcon, DoubleArrowRightIcon } from '@radix-ui/react-icons'



const Content = () => {
    const predict = async (enteredText: string) => {
        setIsLoading(true)
        const result = await axios.post('http://127.0.0.1:8000/predict', {
            'text': enteredText
        })

        setTimeout(() => {
            setPrediction(result.data.language)
            setIsLoading(false)
        }, 500)


    }
    const [enteredText, setEnteredText] = useState('');
    const [prediction, setPrediction] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    return (
        <div className='min-w-[540px] flex flex-col gap-4 items-center'>
            <div className='flex w-full gap-2 items-center'>
                <Input value={enteredText} onChange={(e) => setEnteredText(e.target.value)} className='w-full text-2xl font-medium p-3' required />
                <CrossCircledIcon onClick={() => { setEnteredText(''), setPrediction('') }} className='w-10 h-10 hover:text-slate-600 cursor-pointer ' />
            </div>
            {isLoading ? <Button disabled className='text-xl py-7  font-bold w-1/2'>
                <ReloadIcon className="mr-2 h-4 w-4 animate-spin" />
                Please wait
            </Button> : (enteredText ? <Button onClick={e => predict(enteredText)} variant='default' className='text-2xl py-7   font-semibold w-1/2 '>Predict</Button> : <Button disabled variant='default' className='text-2xl py-7  font-bold w-1/2 '>Predict</Button>)}
            <h2 className='w-full text-2xl text-center mt-5 font-medium flex items-center gap-8 justify-center'>The entered language is
                <DoubleArrowRightIcon className='w-10 h-10' />
                <Badge variant="default" className={prediction === '' ? 'w-1/4 py-3' : 'w-fit text-3xl py-3 bg-stone-800'}>{prediction}</Badge>
            </h2>
        </div>
    )
}

export default Content