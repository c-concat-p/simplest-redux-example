import { FETCH_DEPT } from '../constants'
import $ from 'jquery'

export const fetchDept = function () {
    return function (dispatch) {
        $.ajax({
            type: 'GET',
            url: 'http://www.bestbuy.ca/api/v2/json/search?categoryId=departments',
            dataType: 'jsonp',
            done: dispatch(function (data) {
                return {
                    type: FETCH_DEPT,
                    data: data
                }
            })
        });
    }
}
