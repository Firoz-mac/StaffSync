import React from 'react'
import Personal from './Personal';
import Employment from './Employment';
import EmergencyContact from './EmergencyContact';
import BankDetails from './BankDetails';
import AddressDetails from './AddressDetails';
import RecentActivities from './recentActivities/RecentActivities';
import ErrorState from '../../errorState/ErrorState';

const Overview = () => {

  const personal = [
    { label: "Full Name", value: "Mac" },
    { label: "Gender", value: "Male" },
    { label: "Date of Birth", value: "30 Jan, 1999" },
    { label: "Nationality", value: "Indian" },
    { label: "Marital Status", value: "Single" },
  ];

  const employment = [
    { label: "Joined Date", value: "10 Jan, 2021" },
    { label: "Reporting To", value: "Marcus Thorne" },
    { label: "Job Type", value: "Full-Time" },
    { label: "Work Location", value: "Mumbai" },
    { label: "Probation", value: "Completed" },
  ];

  const emergencyContact = [
    { label: "Contact Name", value: "Carlos Rodriguez" },
    { label: "Relationship", value: "Brother" },
    { label: "Phone", value: "+91 98765 43210" },
    { label: "Email", value: "carlos@example.com" },
  ];

  const bankDetails = [
    { label: "Bank Name", value: "State Bank of India" },
    { label: "Account Number", value: "XXXX XXXX 8921" },
    { label: "IFSC Code", value: "SBIN0001234" },
    { label: "Account Type", value: "Savings" },
    { label: "Tax ID", value: "A-9923847-B" },
  ];

  const recentActivities = [
    {
      id: 1,
      type: "checkin",
      date: "Today, 09:15 AM",
      title: "Checked In",
    },
    {
      id: 2,
      type: "leave",
      date: "Feb 18, 2024",
      title: "Leave Request Approved",
    },
    {
      id: 3,
      type: "payroll",
      date: "Feb 15, 2024",
      title: "Payroll Disbursed",
    },
    {
      id: 4,
      type: "update",
      date: "Feb 10, 2024",
      title: "Address Updated",
    },
  ];

  return (
    <div className='grid grid-cols-1 gap-6 items-start lg:grid-cols-[4fr_2fr]'>

      <div className='grid grid-cols-1 gap-3'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-3'>
          <Personal data={personal}/>
          <Employment data={employment}/>
          <EmergencyContact data={emergencyContact}/>
          <BankDetails data={bankDetails}/>
        </div>
        <AddressDetails/>
      </div>

      <RecentActivities data={recentActivities}/>

    </div>
    // <ErrorState/>
  )
}

export default Overview