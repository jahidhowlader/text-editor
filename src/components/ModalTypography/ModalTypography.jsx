import { HiChevronDown, HiOutlineDesktopComputer, HiOutlineRefresh, HiPlus } from "react-icons/hi";
import './ModalTypography.css'

const ModalTypography = ({ isOpen, typographyFeature, setTypographyFeature, handlerRefresh }) => {
    return (
        <div className={`absolute bg-white w-full pb-4 top-10 drop-shadow-lg rounded space-y-4 ${isOpen ? 'absolute' : 'hidden'}`}>

            {/* Moadl Header */}
            <div className=' p-0 py-2 border-b bg-white shadow'>
                <div className="px-2 flex justify-between items-center">
                    <h6 className="font-bold">Typography</h6>
                    <div className="flex items-center gap-2">
                        <HiOutlineRefresh className="p-1 shadow rounded cursor-pointer hover:bg-gray-300" size={20} onClick={handlerRefresh}/>
                        <HiPlus className="p-1 shadow rounded" size={20} />
                    </div>
                </div>
            </div>

            {/* FONT FAMILY */}
            <div className='flex justify-between items-center px-2'>
                <h6>Family</h6>
                <div>
                    <select name="font" id="font" className='border pr-2 rounded-[2px]'>
                        <option value="roboto">Roboto</option>
                        <option value="inter">inter</option>
                    </select>
                </div>
            </div>

            {/* FONT SIZE */}
            <div className=" px-2">
                <div className="flex justify-between items-center gap-3 ">
                    <div className="flex items-center gap-3">
                        <p >Size</p>
                        <HiOutlineDesktopComputer />
                    </div>
                    <div className="flex items-center gap-1 pr-1">
                        <p className="text-xs">px</p>
                        <HiChevronDown />
                    </div>
                </div>
                <div className="flex justify-between items-center gap-3">

                    {/* Range Controller */}
                    <input
                        type="range" id="volumeControl" className="volume-slider mt-3" min="5" max="100"
                        value={typographyFeature.size}
                        onChange={(e) => {
                            setTypographyFeature({ ...typographyFeature, size: e.target.value })
                        }}
                    />
                    
                    {/* Input Controller */}
                    <input type="number" className="border rounded w-2/12 mt-1 pl-2"
                        value={typographyFeature.size}
                        onChange={(e) => {
                            setTypographyFeature({ ...typographyFeature, size: e.target.value })
                        }} />
                </div>
            </div>

            {/* FONT WEIGHT */}
            <div className='flex justify-between items-center px-2'>
                <h6>Weight</h6>
                <div>
                    <select name="font" id="font" className='border pr-2 rounded-[2px]'>
                        <option value="600">600 (Semi Bold)</option>
                        <option value="400">400 (Normal)</option>
                        <option value="700">700 (Bold)</option>
                    </select>
                </div>
            </div>

            {/* TODO: FONT TRANSFORM */}
            <div className='flex justify-between items-center px-2'>
                <h6>Transform</h6>

                <div>
                    <select name="font" id="font" className='border pr-2 rounded-[2px]'>
                        <option value="default">Default</option>
                        <option value="default">600 (Semi Bold)</option>
                    </select>
                </div>
            </div>

            {/* FONT STYLE */}
            <div className='flex justify-between items-center px-2'>
                <h6>Style</h6>
                <div>
                    <select name="font" id="font" className='border pr-2 rounded-[2px]'>
                        <option value="default">Default</option>
                        <option value="solid">Solid</option>
                        <option value="dashed">Dashed</option>
                        <option value="wavy">Wavy</option>
                        <option value="wavy">600 (Semi Bold)</option>
                    </select>
                </div>
            </div>

            {/* FONT DECORATION */}
            <div className='flex justify-between items-center px-2'>
                <h6>Decoration</h6>
                <div>
                    <select name="font" id="font" className='border pr-2 rounded-[2px]'>
                        <option value="default">Default</option>
                        <option value="thin">Thin</option>
                        <option value="wide">wide</option>
                        <option value="wider">wider</option>
                        <option value="widest">widest</option>
                        <option value="widest">600 (Semi Bold)</option>
                    </select>
                </div>
            </div>

            {/* Line-Height */}
            <div className=" px-2">
                <div className="flex justify-between items-center gap-3 ">
                    <div className="flex items-center gap-3">
                        <p >Line-Height</p>
                        <HiOutlineDesktopComputer />
                    </div>
                    <div className="flex items-center gap-1 pr-1">
                        <p className="text-xs">px</p>
                        <HiChevronDown />
                    </div>
                </div>
                <div className="flex justify-between items-center gap-3">

                    {/* Range Controller */}
                    <input
                        type="range" id="volumeControl" className="volume-slider mt-3" min="-50" max="50" step="1"
                        value={typographyFeature.lineHeight}
                        onChange={(e) => {
                            setTypographyFeature({ ...typographyFeature, lineHeight: e.target.value })
                        }}
                    />
                    
                    {/* Input Controller */}
                    <input type="number" className="border rounded w-2/12 mt-1 pl-2"
                        value={typographyFeature.lineHeight}
                        onChange={(e) => {
                            setTypographyFeature({ ...typographyFeature, lineHeight: e.target.value })
                        }} />
                </div>
            </div>

            {/* Letter Spacing  */}
            <div className=" px-2">
                <div className="flex justify-between items-center gap-3 ">
                    <div className="flex items-center gap-3">
                        <p >Letter Spacing</p>
                        <HiOutlineDesktopComputer />
                    </div>
                    <div className="flex items-center gap-1 pr-1">
                        <p className="text-xs">px</p>
                        <HiChevronDown />
                    </div>
                </div>
                <div className="flex justify-between items-center gap-3">

                    {/* Range Controller */}
                    <input
                        type="range" id="volumeControl" className="volume-slider mt-3" min="-50" max="50" step="1"
                        value={typographyFeature.letterSpacing}
                        onChange={(e) => {
                            setTypographyFeature({ ...typographyFeature, letterSpacing: e.target.value })
                        }}
                    />

                    {/* Input Controller */}
                    <input type="number" className="border rounded w-2/12 mt-1 pl-2"
                        value={typographyFeature.letterSpacing}
                        onChange={(e) => {
                            setTypographyFeature({ ...typographyFeature, letterSpacing: e.target.value })
                        }} />
                </div>
            </div>
            {/*  */}

            {/* Word Spacing */}
            <div className=" px-2">
                <div className="flex justify-between items-center gap-3 ">
                    <div className="flex items-center gap-3">
                        <p >Word Spacing</p>
                        <HiOutlineDesktopComputer />
                    </div>
                    <div className="flex items-center gap-1 pr-1">
                        <p className="text-xs">px</p>
                        <HiChevronDown />
                    </div>
                </div>
                <div className="flex justify-between items-center gap-3">

                    {/* Range Controller */}
                    <input
                        type="range" id="volumeControl" className="volume-slider mt-3" min="-50" max="50" step="1"
                        value={typographyFeature.wordSpacing}
                        onChange={(e) => {
                            setTypographyFeature({ ...typographyFeature, wordSpacing: e.target.value })
                        }}
                    />
                    
                    {/* Input Controller */}
                    <input type="number" className="border rounded w-2/12 mt-1 pl-2"
                        value={typographyFeature.wordSpacing}
                        onChange={(e) => {
                            setTypographyFeature({ ...typographyFeature, wordSpacing: e.target.value })
                        }} />
                </div>
            </div>

        </div>
    );
};

export default ModalTypography;