import SweetAlert from "react-bootstrap-sweetalert";

function SweetAlertComponent({confirm, cancel, title, subtitle, type}) {
  return (
    <>
     <SweetAlert style={{zIndex:"2"}}
     title={title}
     onConfirm={confirm}
     type={type !== undefined ? type : "danger"}
     showCancel={true}
     onCancel={cancel}>
     <h4>{subtitle}</h4>
     </SweetAlert>
    </>
  )
}

export default SweetAlertComponent;

