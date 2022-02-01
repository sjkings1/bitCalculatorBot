import React from 'react'
import { FaHamburger } from 'react-icons/fa'
import { useDispatch, useSelector } from 'react-redux'
import { loadAnswer, loadButtons, loadClear, loadBackspace } from '../redux/calculatorRedux/calculator.actions'
import { CALCULATOR_KEY } from '../redux/calculatorRedux/calculator.reducer'

function CalculatorApp() {

    const dispatch = useDispatch()

    const handleAnswer = (e) => {

        e.preventDefault()
        dispatch(loadAnswer())

    }

    const viewCalculator = useSelector((state) => {

        return state[CALCULATOR_KEY]

    })

    return (

        <React.Fragment>

            <section>

                <div className="bg-black w-96 h-screen mx-auto border-solid border-4 border-white rounded-lg overflow-hidden mt-10">


                    {/* headCaption  */}
                    <div className='text-white w-full font-bold text-3xl h-16 flex items-center space-x-2 pl-2'>

                        <FaHamburger />
                        <h1> CALCULATOR </h1>

                    </div>

                    {/* displayNum */}
                    <div className='h-20'>

                        <input type='text' placeholder='0' value={(viewCalculator.ans).length === 0 ? viewCalculator.number : viewCalculator.ans} className=' w-full h-full border border-white bg-white text-gray-900 text-4xl text-right pr-5 ' />

                    </div>


                    {/* keyTones */}
                    <div className='grid grid-cols-4 gap-2 mt-10 mx-3'>

                        <button onClick={() => dispatch(loadClear())} className='text-white bg-red-600 w-20 h-20 rounded-lg font-bold text-3xl flex justify-center items-center shadow'> AC </button>
                        <button onClick={() => dispatch(loadBackspace())} className='text-white bg-red-500 w-20 h-20 rounded-lg font-bold text-3xl flex justify-center items-center shadow'> C </button>
                        <button onClick={() => dispatch(loadButtons('-'))} className='text-white bg-blue-500 w-20 h-20 rounded-lg font-bold text-3xl flex justify-center items-center shadow'> - </button>
                        <button onClick={() => dispatch(loadButtons('+'))} className='text-white bg-blue-500 w-20 h-40 rounded-lg font-bold text-3xl flex justify-center items-center shadow row-span-2'> + </button>


                        <button onClick={() => dispatch(loadButtons(9))} className='text-black bg-gray-200 w-20 h-20 rounded-lg font-bold text-3xl flex justify-center items-center shadow'> 9 </button>
                        <button onClick={() => dispatch(loadButtons(8))} className='text-black bg-gray-200 w-20 h-20 rounded-lg font-bold text-3xl flex justify-center items-center shadow'> 8 </button>
                        <button onClick={() => dispatch(loadButtons(7))} className='text-black bg-gray-200 w-20 h-20 rounded-lg font-bold text-3xl flex justify-center items-center shadow'> 7 </button>

                        <button onClick={() => dispatch(loadButtons(4))} className='text-black bg-gray-200 w-20 h-20 rounded-lg font-bold text-3xl flex justify-center items-center shadow'> 4 </button>
                        <button onClick={() => dispatch(loadButtons(5))} className='text-black bg-gray-200 w-20 h-20 rounded-lg font-bold text-3xl flex justify-center items-center shadow'> 5 </button>
                        <button onClick={() => dispatch(loadButtons(6))} className='text-black bg-gray-200 w-20 h-20 rounded-lg font-bold text-3xl flex justify-center items-center shadow'> 6 </button>
                        <button onClick={() => dispatch(loadButtons('/'))} className='text-white bg-blue-500 w-20 h-20 rounded-lg font-bold text-3xl flex justify-center items-center shadow'> / </button>

                        <button onClick={() => dispatch(loadButtons(1))} className='text-black bg-gray-200 w-20 h-20 rounded-lg font-bold text-3xl flex justify-center items-center shadow'> 1 </button>
                        <button onClick={() => dispatch(loadButtons(2))} className='text-black bg-gray-200 w-20 h-20 rounded-lg font-bold text-3xl flex justify-center items-center shadow'> 2 </button>
                        <button onClick={() => dispatch(loadButtons(3))} className='text-black bg-gray-200 w-20 h-20 rounded-lg font-bold text-3xl flex justify-center items-center shadow'> 3 </button>
                        <button onClick={() => dispatch(loadButtons('*'))} className='text-white bg-blue-500 w-20 h-20 rounded-lg font-bold text-3xl flex justify-center items-center shadow'> * </button>

                        <button onClick={() => dispatch(loadButtons('.'))} className='text-black bg-gray-200 w-20 h-20 rounded-lg font-bold text-3xl flex justify-center items-center shadow'> . </button>
                        <button onClick={() => dispatch(loadButtons(0))} className='text-black bg-gray-200 w-20 h-20 rounded-lg font-bold text-3xl flex justify-center items-center shadow'> 0 </button>
                        <button onClick={handleAnswer} className='text-white bg-green-600 w-42 h-20 rounded-lg font-bold text-3xl flex justify-center items-center shadow col-span-2'> = </button>

                    </div>

                </div>

            </section>

        </React.Fragment>

    )

}

export default CalculatorApp
