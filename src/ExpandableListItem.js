import React, { Component } from "react";
import { View, StyleSheet, TouchableOpacity, Animated, Image, Text } from "react-native";
import PropTypes from "prop-types";

export class ExpandableListItem extends Component {

    constructor(props) {
        super(props);
        this.state = {
            expanded: props.expanded
        };
        this.fadeAnim = new Animated.Value(0);
    }

    animate() {
        this.fadeAnim = new Animated.Value(0);
        Animated.timing(this.fadeAnim, {
            toValue: 1,
            duration: 250,
            useNativeDriver: true
        }).start();
    }

    handleShowHide = () => {
        this.setState({ expanded: !this.state.expanded });
        this.animate();
    };

    render() {
        const { title, description, onPress, bodyColor, headerColor, ...otherProps } = this.props;
        const { expanded } = this.state;

        const cardStyle = [styles.container, { borderColor: headerColor, borderWidth: 1 }];
        const headerStyle = [styles.titleContainer, { backgroundColor: headerColor }];
        const bodyStyle = { ...styles.bodyContainer, backgroundColor: bodyColor };

        return (
            <View style={cardStyle}>
                <TouchableOpacity onPress={this.handleShowHide} style={headerStyle} {...otherProps}>
                    <Text style={styles.headerText}>{title}</Text>
                    {this.renderIcon()}
                </TouchableOpacity>
                {expanded && (
                    <Animated.View style={[bodyStyle, { opacity: this.fadeAnim }]}>
                        <Text style={styles.descriptionText}>{description}</Text>
                    </Animated.View>
                )}
            </View>
        );
    }

    renderIcon() {
        const { expanded } = this.state;
        return (
            <Image
                style={styles.caretImage}
                source={expanded ? require("../assets/images/caret-up.png") : require("../assets/images/caret-down.png")}
            />
        );
    }
}

ExpandableListItem.propTypes = {
    title: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]).isRequired,
    description: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ]).isRequired,
    bodyColor: PropTypes.string,
    headerColor: PropTypes.string,
    expanded: PropTypes.bool,
    ...TouchableOpacity.propTypes
};

ExpandableListItem.defaultProps = {
    bodyColor: "aliceblue",
    headerColor: "lightskyblue",
    expanded: false,
};

const styles = StyleSheet.create({
    container: {
        width: "100%",
        flexDirection: "column",
        overflow: "hidden",
    },
    titleContainer: {
        paddingVertical: 5,
        paddingHorizontal: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
    },
    bodyContainer: {
        padding: 10,
        overflow: "hidden",
    },
    headerText: {
        fontSize: 16,
        color: "rgba(33, 33, 33, 0.87)",
        flex: 1
    },
    descriptionText: {
        fontSize: 13,
        color: "rgba(33, 33, 33, 0.87)",
    },
    caretImage: {
        width: 10,
        height: 10
    }
});