import React from 'react';

type StackingTestProps = {

};

const StackingTest:React.FC<StackingTestProps> = () => {

  return <div className='relative border border-red-500'>
    <div className='bg-gray-200 z-10'>Z-index auto Spacecreator</div>
    <div className='absolute top-2 bg-green-200 z-10'>Fixed Z-index auto</div>
    {/* <div className='bg-blue-200 absolute left-2 top-2 z-20'>Absolute z-index 20</div>
    <div className='bg-blue-400 absolute left-3 top-3 z-10'>Absolute z-index 10</div>
    <div className='bg-purple-200'>Z-index auto</div>
    <div className='bg-red-300 relative top-3 left-2 z-10'>Relative z-index 10</div>
    <div className='bg-orange-300 relative top-1 left-4'>Relative z-index auto</div>
    <div className='bg-yellow-300 absolute top-1'>Absolute Z-index auto</div>
    <div className='bg-green-300 absolute top-10 left-8 z-10'>Absolute Z-index 10</div> */}
  </div>
}
export default StackingTest;