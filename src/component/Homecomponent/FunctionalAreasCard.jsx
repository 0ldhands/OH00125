import React from 'react'
import { MdManageAccounts } from 'react-icons/md'
import { RiGitBranchFill } from 'react-icons/ri'
import { FcCustomerSupport } from 'react-icons/fc'
import { MdBusiness } from 'react-icons/md'
import { FaChessKing } from 'react-icons/fa6'
import { FcProcess } from 'react-icons/fc'
import { SiAdobeaudition } from 'react-icons/si'
import { BsGraphUp } from 'react-icons/bs'
import funct from "../../assets/function.jpg"
import LazyLoad from 'react-lazyload'

const FunctionalAreasCard = () => {
  return (
     <div className="border-2 border-violet-200 rounded-2xl m-5 overflow-hidden">
          <LazyLoad height={200} offset={100}>
            <img
            src={funct}
            alt="Functional illustration"
            className="w-full h-64 object-cover object-top"
          />
          </LazyLoad>
          <div className="sm:m-5 m-1">
            <h3 className="sm:text-2xl sm:mb-4 mb-1 text-2xl font-bold text-violet-800">
              Functional Areas
            </h3>
            <ul className="sm:space-y-3 space-y-1 text-gray-700">
              <li><MdManageAccounts className="inline-block mr-2 text-violet-600" /> Credit & Risk Management</li>
              <li><RiGitBranchFill className="inline-block mr-2 text-violet-600" /> Branch Operations</li>
              <li><FcCustomerSupport className="inline-block mr-2 text-violet-600" /> Customer Relations</li>
              <li><MdBusiness className="inline-block mr-2 text-violet-600" /> Business Development</li>
              <li><FaChessKing className="inline-block mr-2 text-violet-600" /> Leadership & Team Management</li>
              <li><FcProcess className="inline-block mr-2 text-violet-600" /> Process Improvement</li>
              <li><SiAdobeaudition className="inline-block mr-2 text-violet-600" /> Audit & Compliance</li>
              <li><BsGraphUp className="inline-block mr-2 text-violet-600" /> Revenue Growth</li>
            </ul>
          </div>
        </div>
  )
}

export default FunctionalAreasCard