import './App.css'
import { HiMenu, HiPencil, HiViewGrid } from "react-icons/hi";
import { HiMiniCog6Tooth } from "react-icons/hi2";
import { FaAdjust, FaGlobe, FaSquareFull } from "react-icons/fa";
import { useState } from 'react';
import ModalTypography from './components/ModalTypography/ModalTypography';

function App() {

  const [isOpen, setIsOpen] = useState()
  const [typographyFeature, setTypographyFeature] = useState({
    content: '',
    fontFamily: 'roboto',
    fontSize: '16',
    fontWeight: '600',
    fontStyle: 'normal',
    textDecoration: 'none',
    lineHeight: '0',
    letterSpacing: '0',
    wordSpacing: '0',
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

    setTypographyFeature({
      ...typographyFeature,
      content: '',
      fontFamily: 'roboto',
      fontSize: '16',
      fontWeight: '600',
      fontStyle: 'normal',
      textDecoration: 'none',
      lineHeight: '0',
      letterSpacing: '0',
      wordSpacing: '0',
    })
  }

  return (
    <>
      <div className='grid lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6'>

        {/* Text Edit Funtionality */}
        <div className='shadow-md bg-white lg:h-screen'>

          {/* STATATIC EDIT HEADER */}
          <div className='flex justify-between items-center bg-black text-white p-2'>
            <HiMenu size={20} />
            <h5 className='font-semibold'>Edit Heading</h5>
            <HiViewGrid size={20} />
          </div>

          {/*SELECT CATEGORY FOR CUSTOMISATION */}
          <div className='flex justify-between items-center px-10 text-sm'>
            <div className='py-3'>
              <HiPencil className='mx-auto ' />
              <p>Content</p>
            </div>

            <div className='py-3 px-5 border-b-2 border-black'>
              <FaAdjust className='mx-auto' />
              <p>Style</p>
            </div>

            <div className='py-3'>
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
        <div className='lg:col-span-3 xl:col-span-4 2xl:col-span-5 flex justify-center items-center mx-5 mt-20 lg:mt-0'>

          <div className='space-y-10'>
            <h1 className='text-4xl'>React Task</h1>
            <input
              type="text"
              style={
                {
                  fontFamily: `${typographyFeature.fontFamily}`,
                  fontSize: `${typographyFeature.fontSize}px`,
                  fontWeight: `${typographyFeature.fontWeight}`,
                  fontStyle: `${typographyFeature.fontStyle}`,
                  textDecorationLine: `${typographyFeature.textDecoration}`,
                  lineHeight: `${typographyFeature.lineHeight}px`,
                  letterSpacing: `${typographyFeature.letterSpacing}px`,
                  wordSpacing: `${typographyFeature.wordSpacing}px`,
                }}
              className='p-5 w-full border'
              onChange={(e) => {
                setTypographyFeature({ ...typographyFeature, content: e.target.value })
              }}
              value={typographyFeature.content}
              placeholder='Heading' />

            <h1 className='text-xl '>{typographyFeature.content}</h1>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
