import React, { useState, useEffect, useRef } from 'react'
import { Grid, Row, Col, Table } from 'react-bootstrap'
import { connect } from 'react-redux'

import * as actions from '../../store/actions/burgerIndex'

import Card from '../../components/Card/Card'
//import { thWithdrawalArray, tdWithdrawalArray } from '../../variables/Variables'

const thWithdrawalArray = [
    'No',
    'Username',
    'Amount',
    'Currency',
    'Status',
    'Date',
]

const PendingDeposits = (props) => {
    const [allFunds, setAllFunds] = useState([])

    const gottenAllFunds = useRef()
    useEffect(() => {
        if (!gottenAllFunds.current) {
            if (props.tokenId) {
                props.onInitGetFunds(props.tokenId)
            }
            gottenAllFunds.current = true
        } else {
            if (props.getAllFunds) {
                setAllFunds(props.getAllFunds)
            }
        }
    }, [props])

    const handleApproval = (id) => {

        for(let i = 0; i < props.idsOfFunds.length; i++){
            
            if(id === i){
                
                 return props.onInitFundApproval(props.idsOfFunds[i]._id, props.tokenId)
            }

        }
    }


    return (
        <div className='content'>
            <Grid fluid>
                <Row>
                    <Col md={12}>
                        <Card
                            plain
                            title='Pending Funds for Approval'
                            category='Users that want to fund their account'
                            ctTableFullWidth
                            ctTableResponsive
                            content={
                                <Table>
                                    <thead>
                                        <tr>
                                            {thWithdrawalArray.map(
                                                (prop, key) => {
                                                    return (
                                                        <th key={key}>
                                                            {prop}
                                                        </th>
                                                    )
                                                }
                                            )}
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {allFunds.map((prop, key) => {
                                            return (
                                                <tr key={key}>
                                                    {Object.values(prop).map(
                                                        (prop) => {
                                                            return (
                                                                <td key={key}>
                                                                    {prop}
                                                                </td>
                                                            )
                                                        }
                                                    )}
                                                    <button
                                                        className='btn1'
                                                        onClick={() => handleApproval(key)}
                                                    >
                                                        {props.fundLoading ? 'Loading...' : 'approve'}
                                                    </button>
                                                    {/* <button className='btn1'>
                                                        view
                                                    </button> */}
                                                </tr>
                                            )
                                        })}
                                    </tbody>
                                </Table>
                            }
                        />
                    </Col>
                </Row>
            </Grid>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        loading: state.user.loading,
        fundLoading: state.fundAccount.loading,
        err: state.auth.error,
        tokenId: state.auth.tokenId,
        userId: state.auth.userId,
        fundAccountApprovalSuccess: state.fundAccount.fundAccountApprovalSuccess,
        idsOfFunds: state.fundAccount.idsOfFunds,
        getAllFunds: state.fundAccount.fundedAccount,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onInitGetFunds: (token) => dispatch(actions.initGetFunds(token)),
        onInitFundApproval: (id, token) => dispatch(actions.initFundApproval(id, token)),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(PendingDeposits)
