// import React from 'react';
// import { useHistory } from 'react-router-dom';
// import Button from '../components/Button';

// export default function Header({
//     headerClass,
//     headerLogoLink,
//     workAreaClass,
//     workAreaText,
//     divLogoutClass,
//     workerRoleClass,
//     workerRoleText,
//     workerNameClass,
//     buttonLogoutClass,
// }) {

// const history = useHistory();

// return (
//     <header className={headerClass}>
//         <Link to={headerLogoLink}>
//             <h1>
//          
//                 />
//             </h1>
//         </Link>
//         <h2 className={workAreaClass}>{workAreaText}</h2>
//         <div className={divLogoutClass}>
//             <p className={workerRoleClass}>{workerRoleText}</p>
//             <p className={workerNameClass}>{localStorage.getItem('currentUserName')}</p>
//             <Button
//                 buttonType='text'
//                 buttonClass={buttonLogoutClass}
//                 buttonOnClick={(event) => {
//                     event.preventDefault();
//                     localStorage.clear();
//                     history.push('/');
//                 }}
//                 buttonText='Sair'
//             />
//         </div>
//     </header>
// );

