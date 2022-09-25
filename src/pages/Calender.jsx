import React from 'react'
import { ScheduleComponent, ViewsDirective, ViewDirective, Day, Week, WorkWeek, Month, Agenda, Inject, Resize, DragAndDrop } from '@syncfusion/ej2-react-schedule';
import { DatePickerComponent } from '@syncfusion/ej2-react-calendars';

import { events } from '../data/data';
import { Header } from '../components';

const Calender = () => {
  return (
    <div className='m-2 md:m-10 mt-24 p-2 md:p-10 bg-gray-100 rounded-3xl'>
      <Header title='Calender' />
      <ScheduleComponent className='rounded-3xl h-1'>
        <Inject services={[Day, Month]}/>
      </ScheduleComponent>
    </div>
  )
}

export default Calender