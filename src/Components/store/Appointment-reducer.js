import React from 'react';
import malushkoImg from '../../assets/img/doctors/doctor-1.png';
import harkovImg from '../../assets/img/doctors/doctor-2.png';

const initial = {
    appointmentList: [
        {
            id: 1,
            timestamp: '1618489800000',
            clinicInfo: 'СПБ ГБУЗ "Городская поликлиника №25", пр. Солидарности, д. 1, к. 1, лит. А',
            doctorName: 'Малушко Т.Н.',
            doctorProfile: 'Хирургия',
            doctorPhoto: malushkoImg
        },
        {
            id: 2,
            timestamp: '1618500600000',
            clinicInfo: 'СПБ ГБУЗ "Городская поликлиника №25", пр. Солидарности, д. 1, к. 1, лит. А',
            doctorName: 'Харьков В. С.',
            doctorProfile: 'Терапевтическое отделение',
            doctorPhoto: harkovImg
        },
        {
            id: 3,
            timestamp: '1619773800000',
            clinicInfo: 'СПБ ГБУЗ "Городская поликлиника №25", пр. Солидарности, д. 1, к. 1, лит. А',
            doctorName: 'Малушко Т.Н.',
            doctorProfile: 'Хирургия',
            doctorPhoto: malushkoImg
        },
        {
            id: 4,
            timestamp: '1619619600000',
            clinicInfo: 'СПБ ГБУЗ "Городская поликлиника №25", пр. Солидарности, д. 1, к. 1, лит. А',
            doctorName: 'Харьков В. С.',
            doctorProfile: 'Терапевтическое отделение',
            doctorPhoto: harkovImg
        },
        {
            id: 5,
            timestamp: '1619715600000',
            clinicInfo: 'СПБ ГБУЗ "Городская поликлиника №25", пр. Солидарности, д. 1, к. 1, лит. А',
            doctorName: 'Малушко Т.Н.',
            doctorProfile: 'Хирургия',
            doctorPhoto: malushkoImg
        },
    ],
    closedAppointDays: ['1617267600000', '1617354000000', '1617440400000']
}

function AppointmentReducer(state = initial, action) {
    return state;
}

export default AppointmentReducer;