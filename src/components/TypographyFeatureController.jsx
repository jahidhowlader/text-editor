import { HiChevronDown, HiOutlineDesktopComputer } from 'react-icons/hi';

const TypographyFeatureController = ({ FeatureName, typographyFeature, setTypographyFeature, stateName }) => {

    typographyFeature[stateName] = 24

    console.log('5', { ...typographyFeature });
    return (
        <div className="flex justify-between items-center px-2 overflow-hidden pb-1">

            <div className="flex flex-col">

                <div className="flex items-center gap-3 ">
                    <p >{FeatureName}</p>
                    <HiOutlineDesktopComputer />
                </div>
                <input
                    type="range"
                    id="volumeControl"
                    className="volume-slider mt-3"
                    min="5"
                    max="100"
                    step="1"
                    value={typographyFeature[stateName]}
                    onChange={(e) => {
                        setTypographyFeature({ ...typographyFeature, stateName: e.target.value })
                    }}
                />
            </div>

            <div className="flex flex-col w-2/12">
                <div className="flex items-center justify-end gap-1 pb-3 pr-2">
                    <label htmlFor="volumeControl" className="text-xs">px</label>
                    <HiChevronDown />
                </div>
                <input type="number" className="border rounded pl-2"
                    value={typographyFeature[stateName]}
                    onChange={(e) => {
                        setTypographyFeature({ ...typographyFeature, size: e.target.value })
                    }}
                />
            </div>
        </div>
    );
};

export default TypographyFeatureController;