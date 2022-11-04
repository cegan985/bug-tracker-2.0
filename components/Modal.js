import React, { Fragment, useRef, useState } from 'react'
import { useRecoilState } from 'recoil'
import { modalState } from '../atoms/modalAtom'
import { Dialog, Transition } from '@headlessui/react'
import { db, storage } from '../firebase'
import { addDoc, doc, collection, serverTimestamp } from 'firebase/firestore'
import { useSession } from 'next-auth/react'


function Modal() {
    const { data: session } = useSession()
    const [ open, setOpen ] = useRecoilState(modalState)
    const [ loading, setLoading ] = useState(false)
    const [bug , setBug] = useState('')
    const [assignee , setAssignee] = useState('')
    const bugRef = useRef(null)
    const statusRef = useRef(null)
    const severityRef = useRef(null)
    const assigneeRef = useRef(null)

    const handleBugChange = (event) => {
        setBug(event.target.value);
      };
    
    const handleAssigneeChange = (event) => {
        setAssignee(event.target.value);
      };
   
    

    const uploadPost = async () => {
        if(loading) return

        setLoading(true)

        const docRef = await addDoc(collection(db, 'posts'), {
            username: session.user.name,
            profileImg: session.user.image,
            bug: bugRef.current.value,
            severity: severityRef.current.value,
            status: statusRef.current.value,
            assignee: assigneeRef.current.value,
            timestamp: serverTimestamp()
        })

        //console.log('New doc added', docRef.id)
        setOpen(false)
        setLoading(false)
    }

    
    

  return (
    <Transition.Root show={open} as={Fragment}>
        <Dialog as='div' className='fixed z-40 inset-0 overflow-y-auto' onClose={setOpen}>

            <div className='flex items-end justify-center min-h-[800px] sm:min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0'>
                <Transition.Child 
                as={Fragment} 
                enter='ease-out duration-300' 
                enterFrom='opacity-0' 
                enterTo='opacity-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100'
                leaveTo='opacity-0'>
                    <Dialog.Overlay className='fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity'/>
                </Transition.Child>
                <span className='hidden sm:inline-block sm:align-middle sm:h-screen' aria-hidden='true'>
                    &#8203;
                </span>
                <Transition.Child 
                as={Fragment} 
                enter='ease-out duration-300' 
                enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95' 
                enterTo='opacity-100 translate-y-0 sm:scale-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100 translate-y-0 sm:scale-100'
                leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'>
                    <div className='inline-block align-bottom bg-white dark:bg-slate-800 rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6'>
                        <div className='text-center'>
                        <h1 className='justify-between font-semibold dark:text-white'>Add New Bug</h1>
                        </div>
                        <div className='pt-4'>
                        <h1 className='pb-2'>Bug Description</h1>
                        <textarea onChange={handleBugChange} ref={bugRef} type='text' className='bugForm' placeholder='Bug Description'/>
                        </div>
                        <div className='pt-4'>
                        <h1 className='pb-2'>Severity</h1>
                        <select ref={severityRef} className='bugForm'>
                            <option>Low</option>
                            <option>Medium</option>
                            <option>High</option>
                        </select>
                        </div>
                        <div className='pt-4'>
                        <h1 className='pb-2'>Assign To</h1>
                        <input onChange={handleAssigneeChange} ref={assigneeRef} type='text' className='bugForm' placeholder='Assign To'/>
                        </div>
                        <div className='pt-4'>
                        <h1 className='pb-2'>Status</h1>
                        <select ref={statusRef} className='bugForm'>
                            <option>Open</option>
                            <option>Closed</option>
                        </select>
                        </div>
                        <div className='pt-4 flex justify-end'>
                        <button onClick={uploadPost} disabled={!bug || !assignee} type='button' className='disabled:cursor-not-allowed disabled:ring-0 disabled:text-white disabled:bg-gray-300 flex justify-end bg-[rgb(72,69,210)] text-white rounded-md hover:bg-white hover:text-[rgb(72,69,210)] hover:ring-1 hover:ring-[rgb(72,69,210)] hover:shadow-lg cursor-pointer hover:scale-105 transition-all duration-150 ease-out active:scale-100 p-2'>{loading ? 'Submitting...' : 'Submit'}</button>
                        </div>
                    </div>
                </Transition.Child>
            </div>
        </Dialog>  
    </Transition.Root>
  )
}

export default Modal
