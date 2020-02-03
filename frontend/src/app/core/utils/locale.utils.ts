export class LocaleUtils {

    public static getCalendarEs(): any {
        // return {
        //     firstDayOfWeek: 0,
        //     dayNames: ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'],
        //     dayNamesShort: ['Dom', 'Lun', 'Mar', 'Mie', 'Jue', 'Vie', 'Sab'],
        //     dayNamesMin: ['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sa'],
        //     monthNames: [ 'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre',
        //                   'Octubre', 'Noviembre', 'Diciembre' ],
        //     monthNamesShort: [ 'Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic' ],
        //     today: 'Hoy',
        //     clear: 'Limpiar'

        // };
        return {
            firstDayOfWeek: 0,
            dayNames: ['星期日', '星期一', '星期二', '星期三', '星期四', '星期五', '星期六'],
            dayNamesShort: ['日', '一', '二', '三', '四', '五', '六'],
            dayNamesMin: ['日', '一', '二', '三', '四', '五', '六'],
            monthNames: [ '一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月',
                          '十月', '十一月', '十二月' ],
            monthNamesShort: [ '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12' ],
            today: '今天',
            clear: '清除'

        };        
    }

}
