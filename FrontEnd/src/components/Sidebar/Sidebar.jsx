import React from 'react'
import SearchInput from './SearchInput'
import Conversations from './Conversations'
import LogoutButton from './LogoutButton'

const Sidebar = () => {
  return (
    <div className='border-r border-slate-600 p-4 flex flex-col'>
        <SearchInput/>
        <div className='divider pt-3'></div>
        <Conversations/>
        <LogoutButton/>

    </div>
  )
}

export default Sidebar

//STARTER CODE FOR SIDEBAR
// import React from 'react'
// import SearchInput from './SearchInput'
// import Conversations from './Conversations'
// import LogoutButton from './LogoutButton'

// const Sidebar = () => {
//   return (
//     <div className='border-r border-slate-600 p-4 flex flex-col'>
//         <SearchInput/>
//         <div className='divider pt-3'></div>
//         <Conversations/>
//         <LogoutButton/>

//     </div>
//   )
// }

// export default Sidebar