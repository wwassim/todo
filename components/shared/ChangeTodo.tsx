
import { AiOutlineCheckCircle } from "react-icons/ai"
import Form from "../ui/Form"
import Input from "../ui/Input"
import Button from "../ui/Button"
import { todoStatus } from "@/app/actions/todoActions"

const ChangeTodo = ({todo}) => {
  return (
    <Form action={todoStatus}>
        <Input name="inputId" value={todo.id} type="hidden"/>
        <Button actionButton type="submit" text={<AiOutlineCheckCircle/>}/>
    </Form>
  )
}

export default ChangeTodo