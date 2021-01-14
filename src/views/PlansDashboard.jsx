import React from 'react'
import { Link } from 'react-router-dom'

function PlansDashboard() {


    return (
        <>
            <div className='plans__header'>
                <h2 className='plans__header--text'>
                    Please select an investment plan
                </h2>
            </div>
            <div className='plans-dashboard'>
                <div className='plans-dashboard__container'>
                    <div className='plan-dashboard'>
                        <div className='plan-dashboard__icon'>
                            <h1 className='heading-1 plan-dashboard__icon-percent'>
                                20%
                            </h1>
                            <h1 className='heading-1 plan-dashboard__icon-text'>
                                Plan 1
                            </h1>
                        </div>

                        <ul className='plan-dashboard__list'>
                            <li className='plan-dashboard__list-item'>
                                After{' '}
                                <span className='plan-dashboard__list-item--span'>
                                    24
                                </span>{' '}
                                Hours
                            </li>
                            <li className='plan-dashboard__list-item'>
                                <span className='plan-dashboard__list-item--span'>
                                    20%
                                </span>{' '}
                                Services Uptime
                            </li>
                            <li className='plan-dashboard__list-item'>
                                <span className='plan-dashboard__list-item--span'>
                                    24/7
                                </span>{' '}
                                Support
                            </li>
                            <li className='plan-dashboard__list-item'>
                                minimum -{' '}
                                <span className='plan-dashboard__list-item--span'>
                                    $30
                                </span>
                            </li>
                            <li className='plan-dashboard__list-item'>
                                maximum -{' '}
                                <span className='plan-dashboard__list-item--span'>
                                    $199
                                </span>
                            </li>
                            <li className='plan-dashboard__list-item'>
                                Trading -{' '}
                                <span className='plan-dashboard__list-item--span'>
                                    INSTANT
                                </span>
                            </li>
                            <li className='plan-dashboard__list-item'>
                                Withdrawal Type -{' '}
                                <span className='plan-dashboard__list-item--span'>
                                    INSTANT
                                </span>
                            </li>
                        </ul>
                        <button className='button'>
                            <Link
                                to='/admin/plan-order/:plan 1'
                                className='plan-dashboard__button'
                            >
                                Deposit Now
                            </Link>
                        </button>
                    </div>
                    <div className='plan-dashboard'>
                        <div className='plan-dashboard__icon'>
                            <h1 className='heading-1 plan-dashboard__icon-percent'>
                                50%
                            </h1>
                            <h1 className='heading-1 plan-dashboard__icon-text'>
                                Plan 2
                            </h1>
                        </div>

                        <ul className='plan-dashboard__list'>
                            <li className='plan-dashboard__list-item'>
                                After{' '}
                                <span className='plan-dashboard__list-item--span'>
                                    24
                                </span>{' '}
                                Hours
                            </li>
                            <li className='plan-dashboard__list-item'>
                                <span className='plan-dashboard__list-item--span'>
                                    50%
                                </span>{' '}
                                Services Uptime
                            </li>
                            <li className='plan-dashboard__list-item'>
                                <span className='plan-dashboard__list-item--span'>
                                    24/7
                                </span>{' '}
                                Support
                            </li>
                            <li className='plan-dashboard__list-item'>
                                minimum -{' '}
                                <span className='plan-dashboard__list-item--span'>
                                    $200
                                </span>
                            </li>
                            <li className='plan-dashboard__list-item'>
                                maximum -{' '}
                                <span className='plan-dashboard__list-item--span'>
                                    $800
                                </span>
                            </li>
                            <li className='plan-dashboard__list-item'>
                                Trading -{' '}
                                <span className='plan-dashboard__list-item--span'>
                                    INSTANT
                                </span>
                            </li>
                            <li className='plan-dashboard__list-item'>
                                Withdrawal Type -{' '}
                                <span className='plan-dashboard__list-item--span'>
                                    INSTANT
                                </span>
                            </li>
                        </ul>
                        <button className='button'>
                            <Link
                                to='/admin/plan-order/:Plan 2'
                                className='plan-dashboard__button'
                            >
                                Deposit Now
                            </Link>
                        </button>
                    </div>

                    <div className='plan-dashboard'>
                        <div className='plan-dashboard__icon'>
                            <h1 className='heading-1 plan-dashboard__icon-percent'>
                                75%
                            </h1>
                            <h1 className='heading-1 plan-dashboard__icon-text'>
                                Plan 3
                            </h1>
                        </div>

                        <ul className='plan-dashboard__list'>
                            <li className='plan-dashboard__list-item'>
                                After{' '}
                                <span className='plan-dashboard__list-item--span'>
                                    48
                                </span>{' '}
                                Hours
                            </li>
                            <li className='plan-dashboard__list-item'>
                                <span className='plan-dashboard__list-item--span'>
                                    75%
                                </span>{' '}
                                Services Uptime
                            </li>
                            <li className='plan-dashboard__list-item'>
                                <span className='plan-dashboard__list-item--span'>
                                    24/7
                                </span>{' '}
                                Support
                            </li>
                            <li className='plan-dashboard__list-item'>
                                minimum -{' '}
                                <span className='plan-dashboard__list-item--span'>
                                    $850
                                </span>
                            </li>
                            <li className='plan-dashboard__list-item'>
                                maximum -{' '}
                                <span className='plan-dashboard__list-item--span'>
                                    $2000
                                </span>
                            </li>
                            <li className='plan-dashboard__list-item'>
                                Trading -{' '}
                                <span className='plan-dashboard__list-item--span'>
                                    INSTANT
                                </span>
                            </li>
                            <li className='plan-dashboard__list-item'>
                                Withdrawal Type -{' '}
                                <span className='plan-dashboard__list-item--span'>
                                    INSTANT
                                </span>
                            </li>
                        </ul>
                        <button className='button'>
                            <Link
                                to='/admin/plan-order/:Plan 3'
                                className='plan-dashboard__button'
                            >
                                Deposit Now
                            </Link>
                        </button>
                    </div>
                    <div className='plan-dashboard'>
                        <div className='plan-dashboard__icon'>
                            <h1 className='heading-1 plan-dashboard__icon-percent'>
                                100%
                            </h1>
                            <h1 className='heading-1 plan-dashboard__icon-text'>
                                Plan 4
                            </h1>
                        </div>

                        <ul className='plan-dashboard__list'>
                            <li className='plan-dashboard__list-item'>
                                After{' '}
                                <span className='plan-dashboard__list-item--span'>
                                    7
                                </span>{' '}
                                Days
                            </li>
                            <li className='plan-dashboard__list-item'>
                                <span className='plan-dashboard__list-item--span'>
                                    100%
                                </span>{' '}
                                Services Uptime
                            </li>
                            <li className='plan-dashboard__list-item'>
                                <span className='plan-dashboard__list-item--span'>
                                    24/7
                                </span>{' '}
                                Support
                            </li>
                            <li className='plan-dashboard__list-item'>
                                minimum -{' '}
                                <span className='plan-dashboard__list-item--span'>
                                    $2500
                                </span>
                            </li>
                            <li className='plan-dashboard__list-item'>
                                maximum -{' '}
                                <span className='plan-dashboard__list-item--span'>
                                    $10000
                                </span>
                            </li>
                            <li className='plan-dashboard__list-item'>
                                Trading -{' '}
                                <span className='plan-dashboard__list-item--span'>
                                    INSTANT
                                </span>
                            </li>
                            <li className='plan-dashboard__list-item'>
                                Withdrawal Type -{' '}
                                <span className='plan-dashboard__list-item--span'>
                                    INSTANT
                                </span>
                            </li>
                        </ul>
                        <button className='button'>
                            <Link
                                to='/admin/plan-order/:Plan 4'
                                className='plan-dashboard__button'
                            >
                                Deposit Now
                            </Link>
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PlansDashboard
