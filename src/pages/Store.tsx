import storeItems from "../data/items.json"
import { Row, Col } from "react-bootstrap";
import { isTemplateHead } from "typescript";
import { StoreItems } from "../components/StoreItem";
export function Store() {
    return (

        <Row md={2} xs={1} lg={3} className="g-3">
            {storeItems.map(item => (
                <Col key={item.id}>
                    <StoreItems {...item} />
                    {/* {JSON.stringify(item)} */}
                </Col>
            ))}
        </Row>
    )

}