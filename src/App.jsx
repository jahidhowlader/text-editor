import './App.css'
import { HiMenu, HiPencil, HiViewGrid } from "react-icons/hi";
import { HiMiniCog6Tooth } from "react-icons/hi2";
import { FaAdjust, FaGlobe, FaSquareFull } from "react-icons/fa";
import { useState } from 'react';
import ModalTypography from './components/ModalTypography/ModalTypography';

function App() {

  const [isOpen, setIsOpen] = useState()
  const [typographyFeature, setTypographyFeature] = useState({
    size: '16',
    lineHeight: '0',
    letterSpacing: '0',
    wordSpacing: '0'
  })

  if (typographyFeature.size > 100) {
    typographyFeature.size = 100
  }

  if (typographyFeature.letterSpacing > 50) {
    typographyFeature.letterSpacing = 50
  }

  // Handler Typography Modal
  const handlerTypography = () => {
    setIsOpen(!isOpen)
  }

  // Handler Refresh Typography
  const handlerRefresh = () => {

    setTypographyFeature({ ...typographyFeature, size: 16, letterSpacing: 0, lineHeight: 0, wordSpacing: 0 })
  }

  return (
    <>
      <div className='grid grid-cols-6'>

        {/* Text Edit Funtionality */}
        <div className='shadow-md bg-white h-screen'>

          {/* STATATIC EDIT HEADER */}
          <div className='flex justify-between items-center bg-black text-white p-2'>
            <HiMenu size={20} />
            <h5 className='font-semibold'>Edit Heading</h5>
            <HiViewGrid size={20} />
          </div>

          {/* TODO:  */}
          <div className='flex justify-between items-center py-3 px-10 text-sm'>
            <div>
              <HiPencil className='mx-auto' />
              <p>Content</p>
            </div>

            <div className=' px-5'>
              <FaAdjust className='mx-auto' />
              <p>Style</p>
            </div>

            <div>
              <HiMiniCog6Tooth className='mx-auto' />
              <p>Advance</p>
            </div>
          </div>

          <hr />

          <div className='p-4 text-sm my-2'>
            <details className='space-y-4'>
              <summary className='font-bold cursor-pointer'>Title</summary>

              {/* Text Color */}
              <div className='flex justify-between items-center'>
                <h6>Text Color</h6>

                <div className='flex'>
                  <FaGlobe className='text-pink-500 bg-gray-300 p-1.5 rounded-l  cursor-pointer' size={25} />
                  <FaSquareFull className='text-blue-300 border border-gray-300 p-1.5 rounded-r cursor-pointer' size={25} />
                </div>
              </div>

              {/* Typography */}
              <div className='flex justify-between items-center relative'>
                <h6>Typography</h6>

                <div className='flex'>
                  <FaGlobe className='border border-gray-300 p-1.5 rounded-l cursor-pointer' size={25} />
                  <HiPencil className='bg-gray-300 p-1.5 rounded-r cursor-pointer' size={25} onClick={handlerTypography} />
                </div>

                {/* TYPOGRAPHY COMPONENT */}
                <ModalTypography
                  isOpen={isOpen}
                  typographyFeature={typographyFeature}
                  setTypographyFeature={setTypographyFeature}
                  handlerRefresh={handlerRefresh}
                />
              </div>

              {/* Text Strok */}
              <div className='flex justify-between items-center'>
                <h6>Text Strok</h6>

                <div>
                  <HiPencil className='border border-gray-300 p-1.5 rounded cursor-pointer' size={25} />
                </div>
              </div>

              {/* Text Shadow */}
              <div className='flex justify-between items-center'>
                <h6>Text Shadow</h6>

                <div>
                  <HiPencil className='border border-gray-300 p-1.5 rounded cursor-pointer' size={25} />
                </div>
              </div>

              {/* Blend Mood */}
              <div className='flex justify-between items-center'>
                <h6>Blend Mood</h6>

                <div>
                  <select name="mode" id="mode" className='border pr-2'>
                    <option value="Normal">Normal</option>
                    <option value="Black & White">Black & White</option>
                    <option value="Grey">Grey</option>
                    <option value="Green">Green</option>
                  </select>
                </div>
              </div>

            </details>
          </div>

        </div>

        {/* Main Content */}
        <div className='col-span-5 flex justify-center items-center'>

          <div className='space-y-10'>
            <h1 className='text-4xl'>React Task</h1>
            <input
              type="text"
              style={
                {
                  fontSize: `${typographyFeature.size}px`,
                  lineHeight: `${typographyFeature.lineHeight}px`,
                  letterSpacing: `${typographyFeature.letterSpacing}px`,
                  wordSpacing: `${typographyFeature.wordSpacing}px`,
                }}
              className={`p-5 w-full border text-[${typographyFeature.size}px]`}
              placeholder='Heading' />
          </div>
        </div>
      </div>
    </>
  )
}

export default App
