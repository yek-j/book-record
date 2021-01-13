
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { auth } from '../_actions/user_action';

export default function (SpecificComponent, option, adminRoute = null){

    // option 
    // null : 아무나 출입이 가능한 페이지
    // true : 로그인한 유저만 출입 가능
    // false : 로그인한 유저는 출입 불가능

    function AuthenticationCheck(props){
        const dispatch = useDispatch();

        useEffect (() => {
            dispatch(auth()).then(response => {
                // 로그인 하지 않은 상태
                if(!response.payload.isAuth){
                    if(option){
                        props.history.push('/login');
                    }
                }else {
                    // 로그인 한 상태
                    // 관리자페이지에 관리자가 아닌 사람이 들어오려고 할 때
                    if(adminRoute && !response.payload.isAdmin){
                        props.history.push('/');
                    }else {
                        if(option === false){
                            props.history.push('/');
                        }
                    }
                }
            })
        }, [])
        
        return (
            <SpecificComponent/>
        )
    }

    return AuthenticationCheck
}