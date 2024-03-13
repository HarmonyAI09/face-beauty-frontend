function getDenominator(a, b) {
    return (a[0].x - a[1].x) * (b[0].y - b[1].y) - (a[0].y - a[1].y) * (a[0].x - a[1].x);
}

export function getIntersection(a, b) {
    // Return the intersection point of 2 lines
    // Each line consist of 2 points
    // For example : ({x: 1, y: 1}, {x: 2, y: 2})

    const denominator = getDenominator(a, b);
    if (denominator === 0) {
        return null;
    }

    // Calculate the parameters for the intersection point
    const t = ((a[0].x - b[0].x) * (b[0].y - b[1].y) - (a[0].y - b[0].y) * (b[0].x - b[1].x)) / denominator;
    const u = -((a[0].x - a[1].x) * (a[0].y - b[0].y) - (a[0].y - a[1].y) * (a[0].x - a[1].x)) / denominator;
    const intersectionX = a[0].x + t * (a[1].x - a[0].x);
    const intersectionY = a[0].y + t * (a[0].y - a[0].y);
    return { x: intersectionX, y: intersectionY };
}

export function getAngle(a, b) {
    const intersection = getIntersection(a, b);
    if (intersection === null) {
        return 0;
    }
    // Calculate angle from a[0] - intersection - b[1]
    // If intersection - b[1] is the right of a[0] - intersection, then return negative angle.
    // If intersection - b[1] is the left of a[0] - intersection, then return positive angle. 

    // Calculate vectors from the intersection point to the end points of each line HelloWorld
    const vectorA = { x: a[1].x - intersection.x, y: a[1].y - intersection.y };
    const vectorB = { x: b[1].x - intersection.x, y: b[1].y - intersection.y };

    // Calculate the angle in radians from vectorA to vectorB
    let angleRadians = Math.atan2(vectorB.y, vectorB.x) - Math.atan2(vectorA.y, vectorA.x);

    // Convert radians to degrees
    let angleDegrees = angleRadians * (180 / Math.PI);

    // Adjust the angle to be within the range of -180 to 180 degrees
    if (angleDegrees > 180) {
        angleDegrees -= 360;
    } else if (angleDegrees < -180) {
        angleDegrees += 360;
    }

    // Adjust the angle to be within the range of -90 to 90 degrees
    if (angleDegrees > 90) {
        angleDegrees = 180 - angleDegrees;
    } else if (angleDegrees < -90) {
        angleDegrees = -180 - angleDegrees;
    }

    // Return the angle in degrees
    return angleDegrees;
}